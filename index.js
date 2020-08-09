const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
    res.send('Haiii!');
});

app.get('/siswa/:nama', function(req, res) {
    var namaOrang = req.params.nama;
    res.end('Menampilkan nama siswa: '+namaOrang);
});

app.post('/siswa/', function(req,res) {
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Menampilkan siswa baru, atas nama : '+namaOrang+ 
    ', yang beralamat' +alamat);
});

app.delete('/siswa/:id',function(req,res){
    var id = req.params.id;
    var namaOrang = req.body.nama;
    res.end('ID'+id+'telah dihapus, atas nama '+namaOrang);
});

app.put('/siswa/:id', function(req,res) {
    var id =req.params.id;
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('siswa dengan ID'+id+', telah terupdate');
});

app.get('/jadwal/:matapelajaran', function(req, res) {
    var matapelajaran = req.params.matapelajaran;
    res.end('Menampilkan Mata Pelajaran: '+matapelajaran);
});

app.post('/jadwal/', function(req,res) {
    var hari = req.body.hari;
    var matapelajaran = req.body.matapelajaran;
    var gurupengajar = req.body.gurupengajar;
    res.end('Mata Pelajaran Hari: '+hari+' adalah '+matapelajaran +' dengan gurupengajar ' +gurupengajar);
});

app.delete('/jadwal/:id', function(req,res) {
    var id =req.params.id;
    var matapelajaran = req.body.matapelajaran;
    res.end('ID'+id+'telah menghapus Mata Pelajaran '+matapelajaran);
});

app.put('/jadwal/:id', function(req,res) {
    var id = req.params.id;
    var matapelajaran = req.body.matapelajaran;
    res.end('Mata Pelajaran siswa dengan ID'+id+', telah terupdate');
});

app.listen(port, function() {
    console.log('Terkoneksi!');
});
