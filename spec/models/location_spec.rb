require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'unit testing' do
    let(:built) { build(:location) }
    context 'general' do
      it 'should be able to save successfully' do
        saved = built.save
        expect(saved).to eq true
      end

      it 'should let two different ones save' do
        saved1 = build(:location, city: 'New York').save
        saved2 = build(:location, city: 'New Jersey').save
        expect((saved1 == true) && (saved2 == true)).to eq true
      end
    end

    context 'city' do
      it 'should validate city' do
        saved = build(:location, city: nil).save
        expect(saved).to eq false
      end

      it 'should validate uniqueness' do
        saved1 = build(:location, city: 'New York').save
        saved2 = build(:location, city: 'New York').save
        expect((saved1 == true) && (saved2 == false)).to eq true
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
