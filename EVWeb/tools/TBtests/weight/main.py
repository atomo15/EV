import csv

car = []
total = []
front = []
rear = []
dis =[]
battery = []

def main():
    print('\033c')
    with open('TB tests - Weight.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',');
        line_count = 0;
        for row in csv_reader:
            if line_count == 0:
                line_count += 1;
                continue;
            else:
                car.append(row[0])
                total.append(row[1])
                front.append(row[2])
                rear.append(row[3])
                dis.append(row[4])
                battery.append(row[5])
                
                #print(f'\t{row[0]} ||  {row[1]} || {row[2]}.')
            line_count += 1;
    # convert to js var
    car_js = 'var car=[\"'
    total_js = 'var total=[\"'
    front_js = 'var front=[\"'
    rear_js = 'var rear=[\"'
    dis_js = 'var dis=[\"'
    battery_js = 'var battery=[\"'
    
    i = 0
    for x in car:
        if i == 0:
            car_js = car_js + x+'\"';
            total_js = total_js + total[i]+'\"';
            front_js = front_js + front[i]+'\"';
            rear_js = rear_js + rear[i]+'\"';
            dis_js = dis_js + dis[i]+'\"';
            battery_js = battery_js + battery[i]+'\"';
        else:
            car_js = car_js + ","+'"'+x+'"';
            total_js = total_js + ","+'"'+total[i]+'"';
            front_js = front_js + ","+'"'+front[i]+'"';
            rear_js = rear_js + ","+'"'+rear[i]+'"';
            dis_js = dis_js + ","+'"'+dis[i]+'"';
            battery_js = battery_js + ","+'"'+battery[i]+'"';
        #print(x,total[i],front[i],rear[i],dis[i],battery[i])
        i+=1
    car_js = car_js + '];';
    total_js = total_js + '];';
    front_js = front_js + '];';
    rear_js = rear_js + '];';
    dis_js = dis_js + '];';
    battery_js = battery_js + '];';
    
    #print(car_js)
    #print(total_js)
    #print(front_js)
    #print(rear_js)
    #print(dis_js)
    print(battery_js)
main()
