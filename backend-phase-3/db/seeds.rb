
puts "Seeding database"

$typesofaccess = ["standard", "VIP"]
$typesofevents = ["babyshower", "birthday", "galadinner", "wedding", "graduation"]

50.times do
  fname = Faker::Name.first_name
  lname = Faker::Name.last_name
  Guest.create(
    {
      firstname: fname,
      lastname: lname,
      email: "#{fname.downcase}.#{lname.downcase}@#{Faker::Internet.domain_name}",
      seatno: 0,
      typeofaccess: ""
    }
  )
end

def assignGuests(max)
  newguests = []
  max.times do |i|
    newguest = Guest.find(rand(1..50))
    newguest.seatno = i
    newguest.typeofaccess = $typesofaccess.sample

    newguests << newguest
  end

  newguests.uniq
end

20.times do
  max = rand(30.. 100)
  Event.create({
    typeofevent: $typesofevents.sample,
    date: Faker::Date.birthday.to_date.to_s,
    time: "#{rand(0..23).to_s.rjust(2, "0")}:#{rand(0...60).to_s.rjust(2, "0")}",
    numberofguests: max,
    guests: assignGuests(max)
  })
end

puts "Done seeding"