const adjective = [];
adjective.push("skibidi", "auraless", "based", "cooked", "brat", "Ohio", "mid");

const noun = [];
noun.push("rizzler", "huzz", "sigma", "NPC", "red flag", "girlboss", "looksmaxxer");

const verb = [];
verb.push("goons", "glazes", "mews", "dabs", "gags", "cooks", "rizzes", "jelqs");

const adverb = [];
adverb.push("quickly", "insanely", "horribly", "awfully", "strangely", "perfectly");

function generateSentence() {
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    const randomAdverb = adverb[Math.floor(Math.random() * adverb.length)];
    
    const sentence = `The ${randomAdjective} ${randomNoun} ${randomVerb} ${randomAdverb}.`;
    document.getElementById('GeneratedSentence').innerText = sentence;
}
    
document.getElementById('button').addEventListener('click', generateSentence);