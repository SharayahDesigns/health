class Api::PatientsController < ApplicationController
before_action :set_patient, only:[:show, :destroy, :update]

def index
render json: Patient.all
end
#------------------------ SHOW
def show
  render json: @patient
end
#------------------------- CREATE
def create
  @patient = Patient.new(patient_params)
if(@patient.save)
  render json: @patient
else
  render json: {errors: @patient.errors.full_messages}, status: 422
  end
end
#------------------------ UPDATE
def update
if(@patient.update(patient_params))
  render json: @patient
else
  render json: {errors: @patient.errors.full_messages}, status: 422
  end
end

#--------------------------- DESTROY
def destroy
render json: @patient.destroy
end

#--------------------------- PRIVATE
private 

def set_patient
@patient = Patient.find(params[:id])
end

def patient_params
params.require(:patient).permit(:name)
  
end


end
