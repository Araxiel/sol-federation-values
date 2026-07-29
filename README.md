# Sol Federation Values Quiz
Sol Values is an evolving political values quiz set in the fictional universe of Operational Attrition.

The quiz is intended partly as a small roleplaying gadget and partly as an introduction to the setting: its political divisions, institutions, historical disputes, and the kinds of questions that matter to people living in the Sol Federation.

It currently measures five axes:

Governance: Federalism ↔ Autonomism <br>
Political Economy: Commonwealth ↔ Corporatism <br>
Security: Militarism ↔ Defencism <br>
Ownership: Synthesism ↔ Capitalism <br>
Civic Order: Universalism ↔ Feudalism <br>

The project is based on and forked from 8values.
Despite essentially being complete, the quiz is still going to evolve as the setting and actual game is being developed.

## Additions
The changes and additions of my version compared to the original 8values:

- Reworked scoring and, visual presentation.
- Reworked results page, including a short description/reminder for each value, and a long description of the closest matched ideology.
- Five original setting-specific political axes replacing the original four-axis model.
- Answer options override for selected questions.
- "Factions & Ideologies" page `factions.html`, which shows a list of every faction/ideology, a description, and the value score of each.
- Included a description attribute to each ideology in `ideologies.js`, which the results and factions pages pull from.
- In `questions.js` gave each question an ID attribute, which is both shown faintly in the top right of each question, helping "debugging", and the IDs are used for the special option overrides (found in `quiz.html`)
- In `style.css`, concentrated all the axis colours at the top.
- Created new `values.js` which contains and centralises all the values and their short and long description there. Other pages (i.e. index.html, results.html) pull strings from here.
