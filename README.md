# Introduktion
Målet med dFlow-docker är att göra det lätt att sätta upp en körmiljö för dFlow 
och kommer abland annat att användas för att utvärdera dFlow på Uppsala universitetsbibliotek.

Funktionalitet:
* Grundinstallation av dFlow under Phusion/passenger
* Databas konfiguration för dFlow med PostgreSQL och rake
* Obs! Ingen permanent lagrin i dagsläget

#Användning
Används docker från ./dFlow:
* docker build -t dflow # -- bygger en container och döper den till dflow
* docker-compose up -d # -- startar en körmiljö med postgres och dflow
* docker-compose stop # -- stoppar körmiljön
* docker-compose rm # -- tar bort den lagrade körmiljön
