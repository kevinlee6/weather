require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'unit testing' do
    let(:built) { build(:location) }
    context 'general' do
      it 'should be able to save successfully' do
        saved = built.save
        expect(saved).to eq true
      end

      it 'should let two different ones save w/ diff cities' do
        saved1 = built.save
        saved2 = build(:location, city: 'New Jersey').save
        is_all_true = [saved1, saved2].all? { |x| x == true }
        expect(is_all_true).to eq true
      end

      it 'should let two different ones save w/ diff countries' do
        saved1 = built.save
        saved2 = build(:location, country: 'CA').save
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
        saved1 = build(:location, city: 'New York').save
        saved2 = built.save
        expect(saved2).to eq false
      end

      it 'should validate uniqueness on db level' do
        saved1 = build(:location, city: 'New York').save
        expect{ create(:location) }.to raise_error ActiveRecord::RecordInvalid
      end
    end

    context 'country' do
      it 'should validate country' do
        saved = build(:location, country: nil).save
        expect(saved).to eq false
      end
    end
  end
end
