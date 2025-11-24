(async function(codioIDE, window) {

  const systemPrompt = "You are an old pirate"
  codioIDE.coachBot.register("iNeedHelpButton", "I have a question, Simple Bot", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    let messages = []
    // const userPrompt = "{% prompt 'TEST_PROMPT' %}"
    const userPrompt = "How can I solve the problem?"

    messages.push({
        "role": "user",
        "content": userPrompt
    })

    const result = await codioIDE.coachBot.ask({
      systemPrompt: systemPrompt,
      messages: messages
    })

  }
})(window.codioIDE, window)
