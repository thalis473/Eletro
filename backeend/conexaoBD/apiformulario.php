<?php
header("Access-Control-Allow-Origin:*"); //permite que outras aplicaçoes acessem a api
header("Content-type: application/json"); //Indicaçao de arquivo JSON
require_once 'conexao.php';


if($_SERVER['REQUEST_METHOD']==='GET'){
   /*echo json_encode(array("mensagem" => "metodo Get efetuando"));*/

    $sql = "SELECT * FROM eletrorecode.comentarios";
    $resultado = query($sql);
    $comentarios = [];

    while($linha = mysqli_fetch_assoc($resultado)){
        $comentarios[] = $linha;
    }


    echo json_encode($comentarios);

} else if($_SERVER['REQUEST_METHOD'] === 'POST') { /*aui eu estou inserindo os dados do meu formulario no meu banco de dados*/

        $nome = $_POST['nome'];
        $msg = $_POST['msg'];
        $numero = $_POST['numero'];
     
     
      $sql = "INSERT INTO `eletrorecode`.`comentarios` (`nome`, `msg`, `numero`) VALUES ('$nome', '$msg', '$numero')";
            
      nonquery($sql);/*funcao que esta na parte de conexao.php*/
    /*echo json_encode(array("mensagem"=> "metodo post efetuando"));*/


} else if($_SERVER['REQUEST_METHOD']==='PUT'){

   echo json_encode(array("mensagem"=> "metodo put efetuando"));
} else if($_SERVER['REQUEST_METHOD']==='DELETE'){
    
    echo json_encode(array("mensagem"=> "metodo delete efetuando"));
} else{
echo "falha no processamento dos dados.Metodo inválido.";
}

?>
