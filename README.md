# Introduktion
Målet med dFlow-docker är att det ska vara lätt att sätta upp en körmiljö för dFlow 
och ska bland annat användas för att utvärdera dFlow på Uppsala universitetsbibliotek.

Funktionalitet:
* Grundinstallation av dFlow under Phusion/passenger
* Databas konfiguration för dFlow med PostgreSQL och rake
* Obs! Ingen permanent lagring i dagsläget

## Användning
Installera och använd Docker (https://www.docker.com/):
* docker build -t dflow dFlow # -- bygger en container för dFlow och döper den till dflow
* docker build -t dflowember dFlow_ember # -- se ovan
* docker-compose up -d # -- startar en körmiljö med postgres, dFlow och dFlow_ember
* docker-compose stop # -- stoppar körmiljön
* docker-compose rm # -- tar bort den lagrade körmiljön

Resultat:
* dFlow startas med passenger och exponeras på port 3000
* dFlow_ember startas med ember-cli och exponeras på port 80 (proxy för dFlow)

## Att göra
* Lägg till dFile
