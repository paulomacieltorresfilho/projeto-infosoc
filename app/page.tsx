import { promises as fs } from 'fs';
import Botao from './ui/Botao';

const TAMANHO_DEFAULT = 20;

export default async function Home() {
  const text = await fs.readFile('./public/privacypolicy.txt', { encoding: 'utf-8' });

  return (
    <div className="container">
      <div>
        <h1> Termos e condições: </h1>
        <div style={{ textAlign: 'justify', border: '1px solid #cecece', overflowWrap: 'break-word', padding: '10px', overflowY: 'scroll', maxHeight: '50vh' }}>
          {text.split("\n").map((line, index) => <p style={{ fontSize: `${TAMANHO_DEFAULT - (.01 * index)}px` }}>{line}</p>)}
        </div>
        <Botao />
      </div>
    </div >
  );
}


