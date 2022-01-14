const express = require('express');
const { databse } = require('mssql');
const router = express.Router();

//reference to database
const pool = require('../database');


//add news http verbs
//here we are going to create the page's links
router.get('/', (request, response) => {
    response.render('./MovExtra/List');
});



//list of Mov of transaction
router.get('/List', async(req, response) => {
    //ejecutar procedimiento almacenado
    try {
        const Movs = await new pool.sqlServer.Request()
            .input('Estado', pool.sqlServer.Int, -1)
            .input('FechaInicia', pool.sqlServer.DateTime, '06/01/2021')
            .input('FechaFinal', pool.sqlServer.DateTime, '06/15/2021')
            .input('User', pool.sqlServer.NVarChar, '07')
            // .output('output_parameter', sql.VarChar(50))
            .execute('spr_CarteraMov_ListadoMov');

            response.render('./MovExtra/List', { Movs: Movs.recordset });

    } catch (err) {
        console.log(err);
    }

    //const Movs = await pool.sqlServer.query("EXEC spr_CarteraMov_ListadoMov -1, '" + new date('01/02/2021') +  "', '" + new date('28/02/2021') + "', '07' ");
    //response.render('./MovExtra/List', { Movs: Movs.recordset });
});







//Filter than allow send all the list according a date
router.get('/List/All', async(req, response) => {
    //ejecutar procedimiento almacenado
    try {
        const Movs = await new pool.sqlServer.Request()
            .input('Estado', pool.sqlServer.Int, -1)
            .input('FechaInicia', pool.sqlServer.DateTime, '06/01/2021')
            .input('FechaFinal', pool.sqlServer.DateTime, '06/16/2021')
            .input('User', pool.sqlServer.NVarChar, '07')
            // .output('output_parameter', sql.VarChar(50))
            .execute('spr_CarteraMov_ListadoMov');

            response.json({ msg: 'success', Movs: Movs.recordset });

    } catch (err) {
        response.json({msg:'error'});
        console.log(err);
    }
});
//Filters than allow send newed regs the list according a date
router.get('/List/News', async(req, response) => {
    //ejecutar procedimiento almacenado
    try {
        const Movs = await new pool.sqlServer.Request()
            .input('Estado', pool.sqlServer.Int, 1)
            .input('FechaInicia', pool.sqlServer.DateTime, '06/01/2021')
            .input('FechaFinal', pool.sqlServer.DateTime, '09/30/2021')
            .input('User', pool.sqlServer.NVarChar, '07')
            // .output('output_parameter', sql.VarChar(50))
            .execute('spr_CarteraMov_ListadoMov');

            response.json({ msg: 'success', data: Movs.recordset });

    } catch (err) {
        response.json({msg:'error'});
        console.log(err);
    }
});








router.get('/Detail/:Consecutivo', /*async*/(req, response) => {
    //ejecutar procedimiento almacenado
    response.render('./MovExtra/List');
    /*try {
        
        const Movs = await new pool.sqlServer.Request()
            .input('Estado', pool.sqlServer.Int, -1)
            .input('FechaInicia', pool.sqlServer.DateTime, '05/01/2021')
            .input('FechaFinal', pool.sqlServer.DateTime, '06/30/2021')
            .input('User', pool.sqlServer.NVarChar, '07')
            .input('Mov', pool.sqlServer.Int, req.params.Consecutivo)
            // .output('output_parameter', sql.VarChar(50))
            .execute('spr_CarteraMov_ListadoMov');

            response.send(Movs.recordset[0]);
            //response.render('./MovExtra/List', { Movs: Movs.recordset[0] });

    } catch (err) {
        console.log(err);
    }
    */


    //const Movs = await pool.sqlServer.query("EXEC spr_CarteraMov_ListadoMov -1, '" + new date('01/02/2021') +  "', '" + new date('28/02/2021') + "', '07' ");
    //response.render('./MovExtra/List', { Movs: Movs.recordset });
});

module.exports = router;