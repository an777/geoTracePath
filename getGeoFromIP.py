from ip2geotools.databases.noncommercial import DbIpCity
import fileinput


listIP = list()
for fileinput_line in fileinput.input():
    if 'Exit' == fileinput_line.rstrip():
        break
    listIP.append(fileinput_line.rstrip())

save_lat = 0
save_lng = 0
for ip in listIP:
    #print(ip)
    if ip == "*":
        continue

    resp = DbIpCity.get(ip, api_key="free")
    if (save_lat != resp.latitude) or (save_lng != resp.longitude):
        print("{{lat: {}, lng: {} }},".format(resp.latitude, resp.longitude))
        save_lat = resp.latitude
        save_lng = resp.longitude


