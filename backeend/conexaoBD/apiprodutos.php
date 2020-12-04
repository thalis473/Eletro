<?php
header("Access-Control-Allow-Origin:*"); //permite que outras aplicaçoes acessem a api
header("Content-type: application/json"); //Indicaçao de arquivo JSON
require_once 'conexao.php';

if($_SERVER['REQUEST_METHOD']==='GET'){
   /*echo json_encode(array("mensagem" => "metodo Get efetuando"));
  pushando dados do banco de dados como um objeto json*/
  
    $sql = "SELECT * FROM eletrorecode.produtos join valores on produtos.id_produtos =valores.id_valores;";
    $resultado = query($sql);
    $comentarios = [];

    while($linha = mysqli_fetch_assoc($resultado)){
        $comentarios[] = $linha;
    }
    echo json_encode($comentarios);
} 
    else{
echo "falha no processamento dos dados.Metodo inválido.";
}

?>
