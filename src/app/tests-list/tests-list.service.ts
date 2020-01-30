import { Injectable } from "@angular/core";

import { convertToBaseTests } from "./adapter/nunitAdapter";
import { BaseTests } from "./model/baseTests";

@Injectable()
export class TestsListService {
  Path: string = "";

  constructor() {}

  private getXML(path: string) {
    if (path == "") {
      path = "../../assets/xml/TestsService.xml";
    }
    var request = new XMLHttpRequest();
    request.open("GET", path, false);
    request.send();
    return request;
  }

  setPath(path: string) {
    this.Path = path;
  }
  getTests(XmlPath: string): BaseTests {
    var lstorage = localStorage.getItem("xmlTest");
    if (!lstorage) {
      var xmlDoc = this.getXML(XmlPath);
      var xmlString = new XMLSerializer().serializeToString(xmlDoc.responseXML);
    } else {
      xmlString = lstorage;
    }
    var convert = require("xml2js");
    var parser = new convert.Parser({
      mergeAttrs: true,
      explicitArray: false
    });
    var resultJson: any;
    parser.parseString(xmlString, function(err, result) {
      resultJson = result;
    });
    resultJson = convertToBaseTests(resultJson);
    console.log(resultJson);
    return resultJson;
  }
}
