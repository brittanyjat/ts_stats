import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// step 1: Create an object that satifies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// step 2: Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Using static method
// const matchReader2 = MatchReader.fromCsv('football.csv');
// matchReader2.load();

// COMPOSITION
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

// Using static method from Summary
const summary2 = Summary.winsAnalysisHtmlReport('Newcastle');
summary2.buildAndPrintReport(matchReader.matches);
