#Number of People in the Bus

def number(bus_stops):
  sum = 0
  leave = 0
  
  for i in bus_stops:
      sum += i[0]
      leave += i[1]

  return sum - leave

