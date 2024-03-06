export default function Regras() {
  return (
    <section className="w-full h-full mb-8 pb-9" id="regras">
      <div className="flex flex-col text-justify">
        <h2 className="text-fuchsia-900 font-bold text-4xl text-center pb-10">
          Sobre o <span>atendimento</span>
        </h2>
        <ul className="flex flex-col gap-10 text-lg font-semibold text-zinc-500 pb-10">
          <li>
            Necessário avaliação para montagem do protocolo perfeito para você!
          </li>
          <li>Cada procedimento leva no mínimo 1h</li>
          <li>Atendimento à domicílio, com o conforto que você merece!</li>
          <li className="flex flex-col gap-1">
            Tolerância de atraso são de 15min
            <br />
            <span className="text-fuchsia-800">
              <p>
                Porque tabalho com tempo, caso tenha outra cliente depois de
                você, ela não poderá ser atendida por causa do seu ataso, então
                para evitarmos a sua remarcalção, por favor chegar no horário.
              </p>
            </span>
          </li>
        </ul>
        <h2 className="text-fuchsia-900 font-bold text-4xl text-center pb-10">
          Sobre o <span>agendamento</span>
        </h2>
        <span className="flex flex-col gap-10 text-lg font-semibold text-zinc-500 pb-10">
          <p>
            {" "}
            O agendamento será marcado com o adiantamento de 30% para garantir a
            vaga,<span>referente ao restante pode ser realizado no dia!</span>
          </p>
        </span>
        <span className="text-lg font-semibold text-zinc-500 pb-10">
          <p>
            Em caso de não poder comparacer ou desmarcar 40min antes, o valor do
            adiantamento nao será devolvivo,{" "}
          </p>
          <span className="text-fuchsia-900">
            <p> então por gentileza, marque no dia que realmente possa vir!</p>
          </span>
        </span>
      </div>
    </section>
  );
}
