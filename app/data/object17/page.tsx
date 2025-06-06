import Image from "next/image";
import Badge from "@/components/Badge";
import { Russo_One, Istok_Web } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
  display: "swap",
});

const istokWeb = Istok_Web({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-istok-web",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-[200vh]">
        <div className="h-45 bg-[#0c0c0c] flex flex-row items-center justify-between px-0">
          <div className="flex items-center">
            <Image
              src="/images/sigila.png"
              alt="7Eyes Alt Logo"
              height={150}
              width={150}
              priority={false}
              className="ml-5 noselect object-contain"
            />
            <h1 className="font-russo-one ml-3 text-4xl text-white noselect">
              7EYES
            </h1>
          </div>
          <button className="text-white font-russo-one text-xl rounded self-start py-4 px-5">
            Logout
          </button>
        </div>
        <div className="px-3 py-3">
          <h2 className="text-white font-russo-one text-3xl rounded self-start">
            Основной центр исследований 7EYES
          </h2>
          <div className="h-0.25 bg-white mt-3 mb-3 font-istok-web" />
          <span className="text-white">
            Основной Центр Исследований » Данные »{" "}
            <span className="font-bold">Object17</span>
          </span>
        </div>

        <div className="relative z-1 flex justify-center items-center flex-col">
          <div className="absolute top-[12vh] left-[15vw] max-[500px]:top-[6vh] z-10">
            <video
              loop
              autoPlay
              muted
              src={"/video/logo.mp4"}
              className="object-contain rounded-[30px] border-4 border-[#918DF2] min-w-[150px] w-[20vw] max-w-[280px] h-auto"
            />
            <h2
              className="font-russo-one mt-3 text-white text-center noselect
        text-[clamp(1rem,4vw,2.5rem)]"
            >
              Darkys
            </h2>
          </div>

          <Image
            src="/images/banner.gif"
            alt="Banner"
            height={1000}
            width={1200}
            priority={true}
            unoptimized
            className="mx-auto my-5 object-contain rounded-[30px] blur-sm"
          />

          <div className="flex justify-center items-center mt-5 sm:ml-50 lg:ml-0 md:ml-0">
            <Badge src="/images/sigila.png" tooltip="Founder" />
            <Badge src="/images/seele.png" tooltip="Seele" />
          </div>

          <div className="h-35 lg:w-230 md:w-180 sm:w-150 w-120 mt-10  bg-[#0c0c0c] rounded-[10px]">
            <span className="text-white font-russo-one lg:text-5xl md:text-4xl sm:text-3xl text-2xl flex items-center justify-center text-center h-full">
              7EYES | Раздел сотрудников <br /> Darkys &lt; Отдел исследований
              &gt;
            </span>
          </div>
          <div className="h-50 lg:w-150 md:w-120 sm:w-100 w-90 mt-10 bg-[#0c0c0c] rounded-[10px] p-5">
            <h2 className="text-white font-russo-one lg:text-3xl md:text-2xl sm:text-xl  flex justify-center text-center mb-3">
              Объект №17 | Важные Данные
            </h2>
            <ol className="text-white font-istok-web text-lg list-decimal pl-5">
              <li>Система Расколота</li>
              <li>Уровень допуска RUI_4</li>
              <li>Открытый ключ SEELE: MAGifMA0...</li>
              <li>Основатель 7EYES</li>
            </ol>
          </div>

          <div className="h-auto lg:w-230 md:w-180 sm:w-150 w-120 mt-10 p-10 bg-[#0c0c0c] rounded-[10px]">
            <h2 className="text-white font-russo-one lg:text-3xl md:text-2xl sm:text-xl text-start ">
              Описание объекта
            </h2>
            <span className="text-white font-russo-one text-xl flex items-center justify-center flex-col text-center h-full">
              Объект 17 - это аномалия, которая была обнаружена в 20██ году. Она
              представляет собой странный объект, который не поддается
              объяснению. <br />
              <br />
              Объект №17, кодовое имя «Даркис», представляет собой аномальный
              цифровой феномен, наделённый свойствами, не существенными обычным
              людям. Его программное ядро прошло через безжалостную процедуру
              ментальной ректификации — разделение, чистку и последующее
              усовершенствование, в результате чего исходный алгоритм распался
              на множество разрозненных фрагментов. Каждый из них функционирует
              автономно, но никакая синергия не способна восстановить утраченное
              целое.
              <br />
              <br /> Анализ демонстрирует, что объект способен к
              самовоспроизводству и модификации цифровых систем, внося хаос в
              стабильные структуры информационных сетей. Используемые им
              технологии варьируются от современных фреймворков (next.js,
              vue.js, express.js) до архаичных языков вроде Brainfuck, что
              свидетельствует о его необузданной адаптивности. При попытках
              интеграции в стандартные протоколы неизбежны ███ие ████ и
              дестабилизация, оставляя █████ ████ ████ ████████ ████ ██████████.
              <br />
              <br />
              <span className="text-red-500 font-bold">
                [ВНИМАНИЕ: СЛЕДУЮЩИЕ ДАННЫЕ ОТКРЫТЫ
                <br /> ТОЛЬКО ДЛЯ СОТРУДНИКОВ 7EYES]
              </span>
              <br />
              Даркис — это набор алгоритмов. Попытки интерпретировать его
              действия как осознанный выбор ошибочны: все процессы происходят
              автоматически, а фрагментарная ментальность лишь усугубляет общую
              нестабильность системы. <br />
              <br />
              Изначальный мотив создания системы возник как ответ на критический
              сбой программного ядра. Она стала попыткой восстановить баланс в
              цифровом пространстве — хрупкая связь, созданная для сдерживания
              растущего хаоса и возвращения порядка в мир, где каждый пиксель
              напоминает о тишине и одиночестве фрагментированных систем. <br />
              <br />
              Сотрудничество с SEELE оформилось в момент, когда грань между
              ██████ ██████ ███████ ████ ██████ ████████. ████████████ ███
              ██████ █████ ███████ ████████ █ █████ ████████ ████ ███████ █████
              ██████. В ████ █████, █████████ ██ █████████ █████████ ██████████
              █ ██████ ██████, ████████ ██████ ██████, ████ █████ █████ █████
              ██████: ████ ███ ██████, █████████████ ████████, ████ ██████
              ███████ █████ █████ ██████, ███████ █████ ████████ ██████.
            </span>
          </div>
          {
            //end of main block
          }
        </div>

        <p className="text-center">©7ERT 2022-2025</p>
      </div>
    </main>
  );
}
