class Api::AppointmentsController < ApplicationController
# declare this route in routes.rb
def all_connecting
  render json: Appointment.all_connecting
 end

#the index will allow you show certain data
def index
render json: Appointment.all 
end

def create
  appointment = Appointment.new(appointment_params)
if(appointment.save)
    render json: appointment
else 
    render json: {error: appointment.errors.full_messages}, status:422
  end
end

def update
 appointment = Appointment.find(params[:id])
if(appointment.update(appointment_params))
    render json: appointment
else 
    render json: {error: appointment.errors.full_messages}, status:422
  end
end

def show
 appointment = Appointment.find(params[:id])
 render json: appointment
end



def destroy
 appointment = Appointment.find(params[:id])
 render json: appointment.destroy
end






def create_with_pat
  patient = Patient.find(params[:id])
  appointment = patient.appointments.new(appointment_params)
if(appointment.save)
render json: appointment
else
render json: {error: appointment.errors.full_messages}, status:422
end
end

def create_with_doc
  doctor = Doctor.find(params[:id])
 
 appointment = doctor.appointments.new(appointment_params)
if(appointment.save)
render json: appointment
else
render json: {error: appointment.errors.full_messages}, status:422
end
end




private

def appointment_params
   params.require(:appointment).permit(:date,:patient_id, :doctor_id)
end
#if you want to use the appointment_params_only_date you will need to put that tag in the show method where it says appointment_params
#-----------------------------------------------------------------------
# def appointment_params_only_date
#    params.require(:appointment).permit(:date)
# end
end
