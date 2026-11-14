'use strict';
// Clickjacking-bescherming: niet laten draaien in een frame van een andere site
if (window.top !== window.self) { document.documentElement.hidden = true; try { window.top.location = window.self.location; } catch (e) {} }
