import React from 'react';
import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import MobileHeader from "@/components/common/MobileHeader";
import Footer from "@/components/common/Footer";

const TermsOfService = () => {
  return (
    <BackgroundWrapper>
      <MobileHeader showBackButton={true} />
      
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Termos e Condições
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Termos</h2>
                <p>
                  Ao acessar ao site <a href="https://educanextest.com.br" className="text-blue-400 hover:text-blue-300">Educa Nextest</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Uso de Licença</h2>
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Educa Nextest , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>modificar ou copiar os materiais;</li>
                  <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Educa Nextest;</li>
                  <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ol>
                <p>
                  Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Educa Nextest a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Isenção de responsabilidade</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Os materiais no site da Educa Nextest são fornecidos 'como estão'. Educa Nextest não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                  <li>Além disso, o Educa Nextest não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Limitações</h2>
                <p>
                  Em nenhum caso o Educa Nextest ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Educa Nextest, mesmo que Educa Nextest ou um representante autorizado da Educa Nextest tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Precisão dos materiais</h2>
                <p>
                  Os materiais exibidos no site da Educa Nextest podem incluir erros técnicos, tipográficos ou fotográficos. Educa Nextest não garante que qualquer material em seu site seja preciso, completo ou atual. Educa Nextest pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Educa Nextest não se compromete a atualizar os materiais.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Links</h2>
                <p>
                  O Educa Nextest não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Educa Nextest do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Modificações</h3>
                <p>
                  O Educa Nextest pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Lei aplicável</h3>
                <p>
                  Estes termos e condições são regidos e interpretados de acordo com as leis do Educa Nextest e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </BackgroundWrapper>
  );
};

export default TermsOfService;