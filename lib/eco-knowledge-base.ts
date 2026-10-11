export type EcoKnowledgeEntry = {
  topic: string
  keywords: string[]
  answer: string
  tip: string
  related: string[]
}

// Rule-based EcoBuddy knowledge base. Keep answers short, practical, and easy to scan.
export const ecoKnowledgeBase: EcoKnowledgeEntry[] = [
  { topic: 'Climate change', keywords: ['climate', 'warming', 'temperature', 'emissions', 'co2'], answer: 'Climate change is the long-term shift in Earth’s temperatures and weather patterns. Burning coal, oil, and gas adds greenhouse gases that trap heat. Cutting emissions and protecting ecosystems can slow the change.', tip: 'Use public transport, cycle, walk, or share rides when possible.', related: ['What is the greenhouse effect?', 'How can I save energy?'] },
  { topic: 'Greenhouse effect', keywords: ['greenhouse', 'methane', 'carbon dioxide', 'gases'], answer: 'The greenhouse effect is a natural process where gases in the atmosphere keep Earth warm enough for life. Human activity has increased gases such as carbon dioxide and methane, making the warming effect stronger.', tip: 'Reduce fossil-fuel use and avoid wasting electricity.', related: ['What is global warming?', 'What are renewable energy sources?'] },
  { topic: 'Air pollution', keywords: ['air', 'smog', 'particulate', 'pollution', 'vehicle'], answer: 'Air pollution includes harmful gases and tiny particles from vehicles, industries, burning, and dust. It can damage lungs, hearts, plants, and climate. Cleaner transport and energy reduce exposure and emissions.', tip: 'Avoid burning waste and choose walking or public transit for short trips.', related: ['How do I reduce pollution?', 'What is climate change?'] },
  { topic: 'Water pollution', keywords: ['water pollution', 'river', 'sewage', 'contamination'], answer: 'Water pollution happens when chemicals, sewage, plastics, or excess nutrients enter rivers, lakes, or groundwater. It harms people, aquatic life, and drinking-water supplies.', tip: 'Never pour oil, paint, medicines, or chemicals down a drain.', related: ['How do I save water?', 'How can I reduce plastic?'] },
  { topic: 'Soil', keywords: ['soil', 'land', 'compost', 'fertilizer'], answer: 'Healthy soil stores carbon, filters water, cycles nutrients, and supports plants and enormous microbial diversity. Erosion, toxic chemicals, and overuse can reduce its fertility.', tip: 'Compost food scraps and choose natural soil improvements where possible.', related: ['What is biodiversity?', 'How should I manage waste?'] },
  { topic: 'Plastic pollution', keywords: ['plastic', 'microplastic', 'bottle', 'bag'], answer: 'Plastic pollution occurs when plastic is produced, used, and discarded faster than it can be collected and managed. Larger pieces can injure wildlife, while microplastics spread through water and food chains.', tip: 'Carry a refillable bottle and reusable bag, and refuse unnecessary packaging.', related: ['What are the 3Rs?', 'How do I reduce waste?'] },
  { topic: 'Waste and 3Rs', keywords: ['waste', 'reduce', 'reuse', 'recycle', '3rs', 'recycling'], answer: 'The 3Rs are Reduce, Reuse, and Recycle, in that order. Preventing waste is usually better than recycling it. Reuse items safely, then separate clean recyclable materials from other waste.', tip: 'Keep separate bins for wet, dry, and hazardous waste.', related: ['What is e-waste?', 'How can I reduce plastic?'] },
  { topic: 'E-waste', keywords: ['e-waste', 'electronic', 'phone', 'battery', 'charger'], answer: 'E-waste includes discarded phones, computers, appliances, cables, and batteries. It can contain valuable materials and hazardous substances, so it should not go into ordinary bins.', tip: 'Repair, donate, or take electronics and batteries to an authorised collection point.', related: ['What are the 3Rs?', 'How should I manage waste?'] },
  { topic: 'Biodiversity', keywords: ['biodiversity', 'wildlife', 'species', 'ecosystem', 'habitat'], answer: 'Biodiversity is the variety of living organisms, genes, and ecosystems. It supports food, clean water, pollination, soil health, and resilience when conditions change.', tip: 'Plant native species and avoid disturbing local habitats.', related: ['How does deforestation affect nature?', 'What is soil biodiversity?'] },
  { topic: 'Deforestation', keywords: ['deforestation', 'forest', 'trees', 'logging'], answer: 'Deforestation removes forests for farming, roads, mining, or development. It destroys habitat, releases stored carbon, increases erosion, and can disrupt rainfall patterns.', tip: 'Use paper carefully and support products made without illegal forest clearing.', related: ['What is biodiversity?', 'How can I live sustainably?'] },
  { topic: 'Renewable energy', keywords: ['renewable', 'solar', 'wind', 'hydro', 'energy'], answer: 'Renewable energy comes from sources that naturally replenish, such as sunlight, wind, moving water, and geothermal heat. It usually produces far fewer greenhouse-gas emissions than burning fossil fuels.', tip: 'Save energy first, then choose renewable electricity where it is available.', related: ['How do I save electricity?', 'What is global warming?'] },
  { topic: 'Water conservation', keywords: ['save water', 'water conservation', 'shower', 'tap', 'rainwater'], answer: 'Fresh water is limited and treating or pumping it also uses energy. Fixing leaks, using only what you need, and reusing suitable water can protect supplies.', tip: 'Turn off the tap while brushing and take shorter showers.', related: ['What is water pollution?', 'How can I live sustainably?'] },
  { topic: 'Sustainable lifestyle', keywords: ['sustainable', 'eco friendly', 'lifestyle', 'green habits', 'environmental'], answer: 'A sustainable lifestyle meets today’s needs while reducing harm to ecosystems and future generations. Focus on high-impact habits: transport, energy, food, water, consumption, and waste.', tip: 'Choose one realistic habit to improve this week and make it repeatable.', related: ['How can I reduce plastic?', 'How do I save energy?'] },
  { topic: 'Environment Protection Act', keywords: ['environment protection act', 'epa 1986', '1986 law', 'environment act'], answer: 'India’s Environment (Protection) Act, 1986 is an umbrella law that gives the central government powers to protect and improve the environment and control pollution.', tip: 'Learn your local pollution-control complaint process and report serious violations responsibly.', related: ['What is the Water Act?', 'What is the Air Act?'] },
  { topic: 'Water Act', keywords: ['water act', '1974 law', 'water prevention', 'control pollution'], answer: 'India’s Water (Prevention and Control of Pollution) Act, 1974 aims to prevent and control water pollution and maintains boards that help regulate water quality.', tip: 'Keep chemicals and oils out of drains and waterways.', related: ['What is the Environment Protection Act?', 'What is the Air Act?'] },
  { topic: 'Air Act', keywords: ['air act', '1981 law', 'air prevention', 'air pollution law'], answer: 'India’s Air (Prevention and Control of Pollution) Act, 1981 provides for preventing, controlling, and reducing air pollution through pollution-control boards and standards.', tip: 'Avoid open burning and use cleaner transport whenever possible.', related: ['What is the Environment Protection Act?', 'What is air pollution?'] },
  { topic: 'Plastic Waste Management Rules', keywords: ['plastic waste management', 'plastic rules', 'single use plastic', 'plastic waste rules'], answer: 'India’s Plastic Waste Management Rules provide responsibilities for waste generators, local bodies, producers, and others to reduce, collect, segregate, and manage plastic waste.', tip: 'Carry reusables and separate clean plastic so it can enter the correct collection stream.', related: ['How can I reduce plastic?', 'What are the 3Rs?'] },
]

export function findEcoAnswer(message: string) {
  const words = message.toLowerCase()
  const scored = ecoKnowledgeBase.map((entry) => ({ entry, score: entry.keywords.reduce((score, keyword) => score + (words.includes(keyword) ? 1 : 0), 0) })).sort((a, b) => b.score - a.score)
  return scored[0]?.score ? scored[0].entry : null
}

export function getEcoFallback(message: string): EcoKnowledgeEntry {
  return {
    topic: 'EcoBuddy guidance',
    keywords: [],
    answer: `That is a thoughtful question: “${message.trim()}” I can help you think through it using environmental facts and practical everyday choices. Start by considering the impact on air, water, soil, wildlife, energy, and waste, then choose the smallest realistic action that would reduce harm.`,
    tip: 'Ask me to explain any environmental topic, compare greener choices, or suggest a practical action.',
    related: ['What is climate change?', 'How can I reduce waste?'],
  }
}
