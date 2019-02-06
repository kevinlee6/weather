require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'unit testing' do
    let(:built) { build(:location) }
    let(:created) { create(:location) }

    context 'general' do
      it 'should be able to save successfully' do
        saved = built.save
        expect(saved).to eq true
      end

      it 'should let two different ones save w/ diff cities' do
        saved1 = built.save
        saved2 = build(:location).save
        is_all_true = [saved1, saved2].all? { |x| x == true }
        expect(is_all_true).to eq true
      end
    end

    context 'city' do
      it 'should validate city' do
        saved = build(:location, city: nil).save
        expect(saved).to eq false
      end

      it 'should validate uniqueness on model level' do
        saved2 = build(:location, city_id: created.city_id).save
        expect(saved2).to eq false
      end

      it 'should validate uniqueness on db level' do
        expect{ create(:location, city_id: created.city_id) }.to raise_error ActiveRecord::RecordInvalid
      end
    end

    context 'country' do
      it 'should validate country' do
        saved = build(:location, country: nil).save
        expect(saved).to eq false
      end
    end

    context 'city_id' do
      it 'should validate city id' do
        saved = build(:location, city_id: nil).save
        expect(saved).to eq false
      end
    end
  end
end
