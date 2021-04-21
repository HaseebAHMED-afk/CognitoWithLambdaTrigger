#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CognitoWithLambdaTriggerStack } from '../lib/cognito-with-lambda-trigger-stack';

const app = new cdk.App();
new CognitoWithLambdaTriggerStack(app, 'CognitoWithLambdaTriggerStack');
