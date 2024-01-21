import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from 'path';
import {LambdaRestApi} from "aws-cdk-lib/aws-apigateway";
require('dotenv').config()
export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new NodejsFunction(this, 'rsvp-function', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main',
      entry: path.join(__dirname, `/../handlers/rsvp/index.ts`),
      environment:{
        API_KEY: process.env.API_KEY || 'uh oh',
        INVITE_KEY: process.env.INVITE_KEY || 'uh oh',
        REACT_APP_SPREADSHEET_ID: process.env.REACT_APP_SPREADSHEET_ID || 'uh oh',
        REACT_APP_SHEET_ID: process.env.REACT_APP_SHEET_ID || 'uh oh',
        REACT_APP_GOOGLE_CLIENT_EMAIL: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL || 'uh oh',
        REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY: process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY || 'uh oh'
      }
    });

    const api = new LambdaRestApi(this, 'API', {
      handler: lambdaFunction,
      proxy: false,
      defaultCorsPreflightOptions:{
        allowOrigins: [ '*' ],
        allowMethods: [ 'POST' ]
      }
    });

    const rsvp = api.root.addResource('rsvp');
    rsvp.addMethod('POST'); // POST /items
  }
}
