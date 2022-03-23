# Doctor.destroy_all
# Patient.destroy_all
# Appointment.destroy_all

Doctor.create(name: 'Dr.P')
Doctor.create(name: 'Dr.Odin')
Doctor.create(name: 'Dr.Frizzle')
Doctor.create(name: 'Dr.Dreamy')

Patient.create(name:'Natasia White')
Patient.create(name:'RayRay')
Patient.create(name:'Tyket Moondog')
Patient.create(name:'Aria Mason')
Patient.create(name:'Amino Quartez')
Patient.create(name:'Bumble Bee')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')
Patient.create(name:'Kal-Al')


Appointment.create(date:'2020-03-12', patient_id:2, doctor_id:1)
Appointment.create(date:'2020-03-27', patient_id:1, doctor_id:2)
Appointment.create(date:'2020-03-15', patient_id:3, doctor_id:4)
Appointment.create(date:'2020-03-22', patient_id:4, doctor_id:3)
Appointment.create(date:'2020-03-28', patient_id:5, doctor_id:4)
Appointment.create(date:'2020-03-19', patient_id:7, doctor_id:2)
Appointment.create(date:'2020-03-20', patient_id:6, doctor_id:3)




puts "database seeded"

puts "Patients: #{Patient.all.length}"
puts "Doctors: #{Doctor.all.length}"
puts "Appointment: #{Appointment.all.length}"

#grabs patients physician
# puts "First Patient Doctor: #{Patient.first.Doctors}"

# # grabs patients first physician date
# puts "First Patient Date: #{Patient.first.appointment}"
