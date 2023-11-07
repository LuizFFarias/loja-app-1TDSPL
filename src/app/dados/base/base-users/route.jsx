import {promises as fs, readFile} from 'fs';


export async function POST(request, response){
    //recebendo o arquivo json
    const file = await fs.readFile(process.cwd() + "/src/app/dados/base/db.json", "utf8");

    //converter o arquivo para realizar o trabalho
    const dados = await JSON.parse(file);

    //capturar o reques e tratar os dados
    const dadosDoRequest = await request.json();

    console.log(dadosDoRequest)

    return NextResponse.json({"staus":true})
}