<?php

include_once('conexao.php');

// Configuração para aceitar JSON
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Recebe o corpo da requisição
    $input = file_get_contents('php://input');
    $data = json_decode($input, true); // Decodifica o JSON recebido

    // Validação simples dos dados
    if (!isset($data['name']) || !isset($data['password'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Todos os campos são obrigatórios.']);
        exit;
    }

    $nome = $data['name'];
    $senha = $data['password'];

    if (!$nome || !$senha) {
        http_response_code(400);
        echo json_encode(['error' => 'Dados inválidos.']);
        exit;
    }

    $sql = "SELECT id_usuario FROM usuario WHERE nome_usuario = '" . $nome. "' AND password_usuario = '". $senha ."'";
    $executa_sql = mysqli_query($cnx, $sql);
    if (mysqli_num_rows($executa_sql) > 0) {
        echo json_encode(['message' => "Usuário $nome Logado com sucesso!"]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao logar usuário.']);
    }
} else {
    http_response_code(405); // Método não permitido
    echo json_encode(['error' => 'Método inválido. Use POST.']);
}