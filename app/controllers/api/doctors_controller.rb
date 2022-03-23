class Api::DoctorsController < ApplicationController
before_action :set_doctor, only:[:update,:show, :destroy]


def index
render json: Doctor.all
end
#-----------------------SHOW
def show
render json: @doctor
end

#------------------------CREATE
def create
@doctor = Doctor.new(doctor_params)
if(@doctor.save)
render json: @doctor
else  
render json: {errors: @doctor.errors.full_messages}, status: 422
  end
end

#-----------------------UPDATE

def update
if(@doctor.update(doctor_params))
render json: @doctor
else 
render json: {errors: @doctor.errors.full_messages}, status: 422
  end
end
#------------------------DESTROY
def destroy
render json: @doctor.destroy
end


#----------------------PRIVATE-----------------------------
private
def set_doctor
@doctor = Doctor.find(params[:id])
end

def doctor_params
params.require(:doctor).permit(:name)
  
end



end
