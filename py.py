# 1€ start
# 0.20€ pro min
# 20 km/h = 333 m/min
# 9.99 30
PreisProMinute = 0.30
what = input("test")
if int(what) == 1:
    Time = input("Wie viele Minuten wollen Sie Fahren? : ") 
    print(PreisProMinute * int(Time) + 1, "€")
elif int(what) == 2:
    a=input("Wie viele km möchten sie fahren?")
  
    print(round(float(a) * 1000 / 333 * PreisProMinute + 1))
