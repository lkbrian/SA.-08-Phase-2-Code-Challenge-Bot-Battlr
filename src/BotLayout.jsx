import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function BotLayout() {
  const [botData, setBotData] = useState(null);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `http://localhost:3000/bots`;
  useEffect(() => {
    const fetchBotData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`HTTP Error ! Status:${response.status}`);
        const data = await response.json();
        setBotData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBotData();
  }, [API_URL]);

  const handleEnlistBot = (enlistedBot) => {
    const enlisted = botData.find((bot) => bot.id === enlistedBot);

    if (enlisted && !yourBotArmy.some((bot) => bot.id === enlisted.id)) {
      setYourBotArmy(() => [...yourBotArmy, enlisted]);
    }
  };

  const handleReleaseBot = (selectedBot) => {
    const updatedBotArmy = yourBotArmy.filter((bot) => {
      return bot.id !== selectedBot;
    });
    setYourBotArmy(updatedBotArmy);
  };
  const handleDischargeBot = (botId) => {
    const updatedBotollection = botData.filter((bot) => {
      return bot.id !== botId;
    });
    setBotData(updatedBotollection);
    handleReleaseBot(botId);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <BotCollection
              botData={botData}
              isLoading={isLoading}
              onEnlist={handleEnlistBot}
            />
          }
        />
            <Route
          path="/YourBotArmy"
          element={
            <YourBotArmy
        yourBotArmy={yourBotArmy}
        onRelease={handleReleaseBot}
        onDischarge={handleDischargeBot}
      />
          }
        />
      </Routes>
     
    </>
  );
}

export default BotLayout;
