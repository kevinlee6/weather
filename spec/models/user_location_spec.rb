require 'rails_helper'

RSpec.describe UserLocation, type: :model do
  describe 'unit testing' do
    let(:user) { create :user }
    let(:location) { create :location }
    let(:built) { build :user_location }
    let(:created) { create :user_location }

    context 'general' do
      it 'can be saved successfully' do
        user 
        location
        saved = built.save
        expect(saved).to eq true
      end

      it 'does not allow duplicate locations for same user on db level' do
        user
        location
        saved = built.save
        expect{ created }.to raise_error ActiveRecord::RecordInvalid
      end

      it 'does not allow duplicate locations for same user on model level' do
        user
        location
        saved = built.save
        saved2 = build(:user_location).save
        expect(saved2).to eq false
      end
    end

    context 'user' do
      it 'expects error when no user' do
        location
        expect{ built.save }.to raise_error NoMethodError
      end
    end

    context 'location' do
      it 'expects error when no user' do
        user
        expect{ built.save }.to raise_error NoMethodError
      end
    end

    context 'priority' do
      it 'expects priority to equal zero for first user location' do
        user
        location
        expect(created.priority).to eq 0
      end

      it 'expects priority to increment by 1 per creation' do
        user
        location
        created1 = created
        location2 = create :location
        created2 = create(:user_location, location_id: location2.id)
        expect(created2.priority).to eq 1
      end

      it 'expects other users locations does not affect own priority' do
        user1 = user
        user2 = create(:user, email: 'email@email.com')
        location
        created1 = create(:user_location, user_id: user1.id)
        created2 = create(:user_location, user_id: user2.id)
        is_all_zero = [created1, created2].all? { |x| x.priority == 0 }
        expect(is_all_zero).to eq true
      end
    end
  end
end
