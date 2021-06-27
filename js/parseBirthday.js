function parseBirthday( remarkString ) {
      var regex = /year(?<year>\d{4}).*month(?<month>\d{1,2}).*day(?<day>\d{1,2})/gmi;
      
      let m;
      
      var formattedDate = '';
      
      while ((m = regex.exec(remarkString)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        console.log(m);
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        formattedDate += m[1];
      }
    
      return formattedDate; 
    }
    

parseBirthday('HGI_YEAR2019testmonth12DATE12ABU1234DAY23');
    