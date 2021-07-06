            var table = new Array(9);

            for(var i = 0; i<table.length; i++)
            {
                table[i] = new Array(9);
            }
            document.write('<table border="1">');
            document.write('<thead>');
            document.write('<tr>');

            for(var i = 1; i <= 9; i++) {
                document.write('<th>' + i + '단 </th>');
              }
              document.write('</tr>');
              document.write('</thead>');


            document.write('<tbody>');
            for(var i = 0; i<9; i++)
            {
                document.write('<tr>');
                for(var j = 0; j<9; j++)
                {
                    table[i][j] = (i+1)*(j+1);
                    document.write('<td>' + (i+1) + '*' + (j+1) + '=' + table[i][j] +'</td>');
                }
                document.write('</tr>');
            }
            document.write('</tbody>');
            document.write('</table>');


           