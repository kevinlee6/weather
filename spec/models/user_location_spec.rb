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
    end

    context 'user' do
      it 'expects error when no user' do
        build(:user)
        location
        expect{ built.save }.to raise_error NoMethodError
      end
    end

    context 'location' do
      it 'expects error when no user' do
        build(:location)
        user
        expect{ built.save }.to raise_error NoMethodError
      end
    end

    context 'priority' do
      it 'expects priority to equal one for first user location' do
        user
        location
        expect(created.priority).to eq 1
      end

      it 'expects priority to increment by 1 per creation' do
        user
        location
        created1 = created
        created2 = create(:user_location)
        expect(created2.priority).to eq 2
      end

      it 'expects other users locations does not affect own priority' do
        user1 = user
        user2 = create(:user, email: 'email@email.com')
        location
        created1 = create(:user_location, user_id: user1.id)
        created2 = create(:user_location, user_id: user2.id)
        is_all_one = [created1, created2].all? { |x| x.priority == 1 }
        expect(is_all_one).to eq true
      end
    end
  end
end
