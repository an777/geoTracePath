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

    ip_lat = resp.latitude
    ip_lng = resp.longitude

    if (ip_lng == None) or (ip_lat == None):
        ip_lat = 0
        ip_lng = 0

    #print(ip_lat,ip_lng)
    if (save_lat != ip_lat) or (save_lng != ip_lng):
        print(f"{{lat: {ip_lat:.3f}, lng: {ip_lng:.3f} }},")
        save_lat = ip_lat
        save_lng = ip_lng