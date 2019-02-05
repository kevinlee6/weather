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
        saved1 = build(:user, email: 'test@test.com').save
        saved2 = build(:user, email: 'test@test.com').save
        expect(saved1 == saved2).to eq false
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

      it 'should be lowercase after save' do
        user = create(:user, email: 'LOWERCASE@EMAIL.COM')
        is_downcase = user.email == user.email.downcase
        expect(is_downcase).to eq true
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

      it 'should be hashed after save' do
        password = 'password'
        user = create(:user, password: password)
        is_not_same = user.password_digest && user.password_digest != password
        expect(is_not_same).to eq true
      end
    end
  end
end
