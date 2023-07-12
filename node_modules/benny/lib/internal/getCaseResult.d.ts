import { Event } from 'benchmark';
import { CaseResult } from './common-types';
declare type GetCaseResult = (event: Event) => CaseResult;
declare const getCaseResult: GetCaseResult;
export default getCaseResult;
