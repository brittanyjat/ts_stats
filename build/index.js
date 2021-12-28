"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// step 1: Create an object that satifies the 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// step 2: Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// Using static method
// const matchReader2 = MatchReader.fromCsv('football.csv');
// matchReader2.load();
// COMPOSITION
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
// Using static method from Summary
const summary2 = Summary_1.Summary.winsAnalysisHtmlReport('Newcastle');
summary2.buildAndPrintReport(matchReader.matches);
