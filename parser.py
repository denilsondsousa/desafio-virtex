#coding=utf-8
import os
import sys
import json

#Captura endereço do diretório do arquivo
dirname_loc = os.path.dirname(__file__)

#Capta nome de Arquivo a ser processado
filename = sys.argv[1]

#Cria endenreço do arquivo a ser processado
filename_loc = os.path.join(dirname_loc, 'Inputs',filename)

#Variaveis de Apoio
huawei = []
zte = []
state = []

#Bloco de código para processar dados do Arquivo Huawei
if(filename == 'OntInfo - Huawei.txt'):
  with open(filename_loc, 'r') as file:
    for linha in file.readlines():
      linha = linha.strip()

      #Ignorando linhas desnecessárias
      if not linha or linha.startswith('-') or not linha[0].isdigit():
          continue

      data = linha.split()

      if(len(data)>4):
        slot = int(data[1].split('/')[0])
        port = int(data[1].split('/')[1])
        ont_id = int(data[2])
        sn = data[3]
        state = data[5]
        olt = 'Huawei'
        info = {'slot': slot, 'port': port, 'ont_id': ont_id, 'sn': sn, 'state': state, 'olt': olt}
        huawei.append(info)

    #Salvando dados coletados em arquivo .json
    with open(dirname_loc+'/OntInfo - Huawei.json', 'w') as fp:
      json.dump( huawei, fp)

#Bloco de código para processar dados do Arquivo ZTE
elif(filename == 'OntInfo - ZTE - SNs.txt'):
  with open(filename_loc, 'r') as file_sn, open(filename_loc.split('.')[0]+' - State.txt') as file_st:

    #Extraindo status dos arquivos ZTE
    for linha in file_st.readlines():
      if linha.startswith('-') or not linha[0].isdigit():
        continue

      data = linha.split()
      state.append(data[3])

    for linha in file_sn.readlines():
      if linha.startswith('-') or not linha.startswith('gpon-onu'):
        continue

      index = 0
      data = linha.split()
      slot = int(data[0].split('/')[1])
      port = int(data[0].split('/')[2].split(':')[0])
      ont_id = int(data[0].split(':')[1])
      sn = data[3].split(':')[1]
      olt = 'ZTE'
      info = {'slot': slot, 'port': port, 'ont_id': ont_id, 'sn': sn,'state': state[index], 'olt': olt}
      zte.append(info)
      index+=1

    #Salvando dados coletados em arquivo .json
    with open(dirname_loc+'/OntInfo - ZTE - SNs.json', 'w') as fp:
      json.dump(zte, fp)
        


