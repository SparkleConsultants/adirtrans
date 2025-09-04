import React from 'react';
import { Handshake, TrendingUp, Shield, Users, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BusinessPartnership: React.FC = () => {
  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Access to wider customer base across PNG',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Comprehensive vehicle and passenger insurance',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Driver Training',
      description: 'Professional development and safety training',
      color: 'text-purple-600'
    }
  ];

  const partnerRequirements = [
    'Valid PNG business license',
    'Vehicle registration and roadworthy certificate',
    'Driver license verification',
    'Background check clearance',
    'Vehicle insurance coverage'
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-2xl">
            <Handshake className="h-8 w-8 text-purple-600" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Partner With Adir Transportation
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-700 text-lg">
            Join PNG's leading transport network and grow your business while helping solve transportation challenges across Papua New Guinea.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-all">
                  <CardContent className="p-4 text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-3 ${benefit.color}`} />
                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Partnership Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {partnerRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Anti-Corruption Commitment:</strong> All partners must agree to transparent, fair business practices and zero-tolerance corruption policy.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Get Started Today</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                Step 1: Submit Application
              </Badge>
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                Step 2: Document Verification
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 text-sm px-3 py-1">
                Step 3: Training & Onboarding
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 text-sm px-3 py-1">
                Step 4: Start Earning
              </Badge>
            </div>
            
            <div className="space-y-3 pt-4">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white">
                Apply for Partnership
              </Button>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessPartnership;