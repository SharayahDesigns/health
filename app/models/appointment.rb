class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor

def self.all_connecting
appointments = self.all
return appointments.map do |appointment|
    {id: appointment.id, date: appointment.date, patient:appointment.patient, doctor:appointment.doctor}
    end
  end
end
