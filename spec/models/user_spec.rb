require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'unit testing' do
    let(:built) { build(:user) }
    
    context 'general' do
      it 'should be able to save successfully with valid input' do
        saved = built.save
        expect(saved).to eq true
      end
    end

    context 'email' do
      it 'should validate' do
        user = build(:user, email: nil)
        saved = user.save
        expect(saved).to eq false
      end

      it 'should not allow duplicates, case insensitive' do
        built.save
        user = build(:user, password: 'PasSworD')
        saved = user.save
        expect(saved).to eq false
      end

      it 'should now allow more than 254 chars' do
        user = build(:user, email: 'a' * 255)
        saved = user.save
        expect(saved).to eq false
      end

      it 'should verify email regex' do
        bad_emails = []
        bad_emails << build(:user, email: 'test').save
        bad_emails << build(:user, email: 'test@m').save
        bad_emails << build(:user, email: 'test@m.').save
        bad_emails << build(:user, email: '@m.').save
        bad_emails << build(:user, email: '@m.c').save
        expect(bad_emails.any?).to eq false
      end
    end

    context 'password' do
      it 'should validate' do
        user = build(:user, password: nil)
        saved = user.save
        expect(saved).to eq false
      end

      it 'should enforce length < 6' do
        user = build(:user, password: 'fail')
        saved = user.save
        expect(saved).to eq false
      end
    end
  end
end
