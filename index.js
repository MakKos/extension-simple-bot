(async function(codioIDE, window) {

  const systemPrompt = "You must answer concisely and to the point"
  codioIDE.coachBot.register("iNeedHelpButton", "I have a question, Simple Bot", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    let messages = []
    const userPrompt = "{% prompt 'TEST_PROMPT' %}"

    messages.push({
        "role": "user",
        "content": userPrompt
    })

    const result = await codioIDE.coachBot.ask({
      systemPrompt: systemPrompt,
      messages: messages,
      vars: {
        "GUIDE_CONTENT": context.guidesPage.content,
        "NAME": "Mr. Smith"
      }
    })

  }
})(window.codioIDE, window)
