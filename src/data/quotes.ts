export interface Quote {
  text: string;
  author: string;
  source: string;
  tags: string[]; // New field
}

const quotes: Quote[] = [
  { text: "You have power over your mind, not outside events.", author: "Marcus Aurelius", source: "Meditations", tags: ["mind", "control"] },
  { text: "We suffer more in imagination than in reality.", author: "Seneca", source: "Letters", tags: ["mind", "fear"] },
  { text: "Freedom is secured by not wanting what you cannot have.", author: "Epictetus", source: "Discourses", tags: ["freedom", "desire"] },
  { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius", source: "Meditations", tags: ["action", "virtue"] },
  { text: "What need is there to weep over parts of life? The whole of it calls for tears.", author: "Seneca", source: "Letters", tags: ["life", "perspective"] },
  { text: "It’s not what happens to you, but how you react that matters.", author: "Epictetus", source: "Enchiridion", tags: ["reaction", "control"] },
  { text: "If it’s endurable, then endure it. Don’t complain.", author: "Marcus Aurelius", source: "Meditations", tags: ["endurance", "discipline"] },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca", source: "Letters", tags: ["luck", "preparation"] },
  { text: "No man is free who is not master of himself.", author: "Epictetus", source: "Discourses", tags: ["freedom", "self-control"] },
  { text: "The life we receive is not short, but we make it so.", author: "Seneca", source: "On the Shortness of Life", tags: ["life", "time"] },
  { text: "Very little is needed to make a happy life.", author: "Marcus Aurelius", source: "Meditations", tags: ["happiness", "simplicity"] },
  { text: "He who fears death will never do anything worthy of a living man.", author: "Seneca", source: "Letters", tags: ["death", "courage"] },
  { text: "Make the best use of what is in your power.", author: "Epictetus", source: "Enchiridion", tags: ["action", "control"] },
  { text: "Accept whatever comes to you woven in the pattern of your destiny.", author: "Marcus Aurelius", source: "Meditations", tags: ["fate", "acceptance"] },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca", source: "Letters", tags: ["mind", "resilience"] },
  { text: "First say to yourself what you would be; then do what you have to do.", author: "Epictetus", source: "Discourses", tags: ["action", "purpose"] },
  { text: "The best revenge is to be unlike him who performed the injury.", author: "Marcus Aurelius", source: "Meditations", tags: ["virtue", "revenge"] },
  { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus", source: "Fragments", tags: ["wealth", "simplicity"] },
  { text: "To live a good life: We have the potential for it.", author: "Marcus Aurelius", source: "Meditations", tags: ["life", "virtue"] },
  { text: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca", source: "Letters", tags: ["resilience", "growth"] },
  { text: "Don’t explain your philosophy. Embody it.", author: "Epictetus", source: "Enchiridion", tags: ["action", "philosophy"] },
  { text: "Look well into thyself; there is a source of strength.", author: "Marcus Aurelius", source: "Meditations", tags: ["mind", "strength"] },
  { text: "Life is long if you know how to use it.", author: "Seneca", source: "On the Shortness of Life", tags: ["life", "time"] },
  { text: "You are a little soul carrying a corpse.", author: "Epictetus", source: "Fragments", tags: ["death", "perspective"] },
  { text: "What is there more beautiful than a mind at peace?", author: "Marcus Aurelius", source: "Meditations", tags: ["mind", "happiness"] },
  { text: "Associate with those who will make a better man of you.", author: "Seneca", source: "Letters", tags: ["growth", "relationships"] },
  { text: "Care take this moment. Immerse yourself in its particulars.", author: "Epictetus", source: "Discourses", tags: ["presence", "focus"] },
  { text: "The art of living is more like wrestling than dancing.", author: "Marcus Aurelius", source: "Meditations", tags: ["life", "resilience"] },
  { text: "While we wait for life, life passes.", author: "Seneca", source: "Letters", tags: ["time", "action"] },
  { text: "There is only one way to happiness: cease worrying.", author: "Epictetus", source: "Enchiridion", tags: ["happiness", "worry"] },
];

export default quotes;