function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Little Kites School Wiki Search')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function searchSchool(schoolCode) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // Clean user input
  var searchCode = String(schoolCode).trim();
  
  for (var i = 1; i < data.length; i++) {
    var code = String(data[i][0]).trim(); // Column A: School Code
    
    if (code === searchCode) {
      return {
        success: true,
        code: data[i][0],
        name: data[i][1],
        subdistrict: data[i][2],
        management: data[i][3],
        link: data[i][4] // Column E: Little Kites Link
      };
    }
  }
  
  return { success: false, message: 'ഈ സ്കൂൾ കോഡ് കണ്ടെത്തിയില്ല!' };
}
Initial commit - Code.gs
