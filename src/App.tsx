import React from "react";
import { ContentScreen } from "./components/content-screen/ContentScreen";
import { Separator } from "./components/separator/Separator";
import { Slider } from "./components/slider/Slider";
import { ScreenOne } from "./components/screens/screen-one/ScreenOne";
import { ScreenTwo } from "./components/screens/screen-two/ScreenTwo";
import { ScreenThree } from "./components/screens/screen-three/ScreenThree";
import { ScreenFour } from "./components/screens/screen-four/ScreenFour";
import css from "./App.module.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export interface ICardData {
  title: string;
  text: string;
}

export const cards1: ICardData[] = [
  {
    title: "Пополни баланс",
    text: "Для доступа к системе необходимо положить деньги на свой счет. Не волнуйся, это не значит, что ты больше их не увидишь!",
  },
  {
    title: "Регулярно тренируйся",
    text: "Каждый день ты выполняешь тренировку из 4 упражнений, которая занимает не больше 10 минут.",
  },
  {
    title: "Подтверждай результат",
    text: "Мы проверяем факт выполнения упражнений через камеру твоего sтелефона с помощью технологии компьютерного зрения.",
  },
];
export const cards2: ICardData[] = [
  {
    title: "Итоги испытания",
    text: "Через 7 дней подводится итог для всех участников.",
  },
  {
    title: "Победит сильнейший",
    text: "Если за это время ты пропустил больше одного тренировочного дня, твой депозит сгорает и перераспределяется между остальными участниками системы.",
  },
  {
    title: "Заслуженная награда",
    text: "А если ты добросовестно занимался всю неделю, то вместе со своим депозитом получаешь деньги проигравших участников, которые можно вывести в любой момент!",
  },
];

function App() {
  return (
    <div className={css.app}>
      <Header />
      <ContentScreen noTop>
        <ScreenOne />
      </ContentScreen>
      <Separator
        type="ltr"
        text="Встроить спорт в свою жизнь проще, чем кажется"
      />
      <ContentScreen>
        <ScreenTwo cards={cards1} />
      </ContentScreen>
      <Separator
        type="rtl"
        text="Начать заниматься спортом и не бросить на полпути"
      />
      <ContentScreen>
        <ScreenThree cards={cards2} />
      </ContentScreen>
      <ContentScreen noTop>
        <ScreenFour />
      </ContentScreen>
      <Footer />
    </div>
  );
}

export default App;
