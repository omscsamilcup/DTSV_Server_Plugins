const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require('axios')
const fs = require("fs");

function log(msg) {
  console.log(msg);
}

const GOOGLE_API_KEY = "AIzaSyCa0Kj6TnzBxaPQ2vDiqkWsE8KQhnhEffU";
const genai = new GoogleGenerativeAI(GOOGLE_API_KEY);
const GEMINI_API_URL = 'https://api.gemini.ai/v1/generate'

async function ai(msg) {
  const model = genai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const generationConfig = {
        max_output_tokens: 300,
        temperature: 0.8,
        top_p: 0.95,
        top_k: 64,
        frequency_penalty: 0,
        presence_penalty: 0
    };

    const sysInstruction = "You are an assistant. If you want to help players. please abide by the community rules";

    try {
        const response = await axios.post(GEMINI_API_URL, {
            prompt: msg,
            apiKey: GEMINI_API_KEY,
            generation_config: generationConfig,
            sys_instruction: sysInstruction
        });

        const aiResponse = response.data.text;
        log('[take over]'+aiResponse)
        return aiResponse
    } catch (error) {
        console.error('Error calling Gemini AI:', error);
        message.reply('Sorry, I encountered an error while contacting Gemini AI.');
    }
}

mc.listen("onServerStarted", () => {
  var cmd = mc.newCommand("ai", PremType.Any);
  cmd.mandatory("describe", PremType.String);
  cmd.overload(["describe"]);
  cmd.setCallback((_cmd, ori, _out, res) => {
    const {describe } = res;
    var pl = ori.player;
    if (length(describe) <= 100) {
      pl.tell("§c請燒等");
      log(`[send][ai]PLayer: ${pl} send [${describe}] to gemini ai`);
      pl.tell('§c>>>'+log(describe))
    } else if (length(describe) = 0) {
      pl.tell("§e>>> 輸入的文本無效");
      log(`[Error][over][ai]PLayer: ${pl} entered invalid`);
    } else {
      pl.tell("§e>>> 輸入的文本大於100個字節");
      log(`[Error][over][ai]PLayer: ${pl} entered over 100 tok so reject ask`);
    }
  });
  cmd.setup()
});
