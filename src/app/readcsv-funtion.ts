// import * as fs from 'fs';
// import fs from 'fs';
import { readFileSync } from "fs";

export function parseCSVList(csvPath : string) {
    let csvList: any[] = [];
  
    console.log("Parsing..." + csvPath);
    
    const fs = require("fs");
    let { parse } = require("csv-parse/sync");

    readFileSync(csvPath, { encoding: 'utf-8'});

    // GET request for the CSV, FS is not available from a browser context
    // Use GET request.
    // fs.createReadStream(csvPath)
    //   .pipe(parse({ delimiter: ";", from_line: 2}))
    //   .on("data", function (row: any) {
    //     console.log(row);
    //     csvList.push(row);
    //   })
    //   .on ("error", function (error: any) {
    //     console.log(error);
    //   });

    console.log("Parsing Ended");
    // return csvList;
  }