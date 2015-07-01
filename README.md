# Introduktion
Målet med dFlow-docker är att det ska vara lätt att sätta upp en körmiljö för dFlow 
och ska bland annat användas för att utvärdera dFlow på Uppsala universitetsbibliotek.

Funktionalitet:
* Grundinstallation av dFlow under Phusion/passenger
* Databas konfiguration för dFlow med PostgreSQL och rake
* Obs! Ingen permanent lagring i dagsläget

#Användning
Använd docker från ./dFlow:
* docker build -t dflow # -- bygger en container och döper den till dflow
* docker-compose up -d # -- startar en körmiljö med postgres och dflow
* docker-compose stop # -- stoppar körmiljön
* docker-compose rm # -- tar bort den lagrade körmiljön
